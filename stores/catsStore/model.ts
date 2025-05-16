import { makeAutoObservable, runInAction } from "mobx";

import { getLsItem, setLsItem } from "@/utils";
import { getCats } from "./api";
import { LS_CATS_FAV_KEY, LS_CATS_LIST_KEY } from "./constants";
import { Cat, Filters } from "./types";

class CatsStore {
  catsList: Cat[] = [];
  loading = false;
  favoritesCats: Record<string, Cat["id"]> = {};

  selectedCat: Cat | null = null;
  selectedFilter = "";

  constructor() {
    makeAutoObservable(this);
  }

  get isFavorite() {
    return this.favoritesCats[this.selectedCat?.id ?? 0];
  }

  async init() {
    const cats = await getLsItem(LS_CATS_LIST_KEY);
    const catsFav = await getLsItem(LS_CATS_FAV_KEY);

    if (cats) {
      this.catsList = JSON.parse(cats);
    }
    if (catsFav) {
      this.favoritesCats = JSON.parse(catsFav);
    }
  }

  get list() {
    const sorted = this.catsList
      .slice()
      .sort(this.heightFilter.bind(this))
      .filter(this.favoriteFilter.bind(this))
      .sort(this.nameFilter.bind(this));

    return sorted;
  }

  async getCatsList() {
    runInAction(() => (this.loading = true));

    const cachedList = this.catsList;

    try {
      const response = await getCats();
      const catsSet = [...new Set([...response, ...cachedList])];
      this.catsList = catsSet;
      await setLsItem(LS_CATS_LIST_KEY, JSON.stringify(catsSet));
    } catch (error) {
      console.log("[GET CATS ERROR]", error);
      await this.init();
    } finally {
      runInAction(() => (this.loading = false));
    }
  }

  setSelectedCat(cat: Cat | null) {
    this.selectedCat = cat;
  }

  async toggleFavorites(catId: Cat["id"]) {
    if (this.favoritesCats[catId]) delete this.favoritesCats[catId];
    else this.favoritesCats[catId] = catId;

    await setLsItem(LS_CATS_FAV_KEY, JSON.stringify(this.favoritesCats));
  }

  setSelectedFilter(filter: Filters) {
    if (this.selectedFilter === filter) {
      this.selectedFilter = "";
      return;
    }
    this.selectedFilter = filter;
  }

  heightFilter(aCat: Cat, bCat: Cat) {
    if (this.selectedFilter !== Filters.height) return 0;

    return aCat.height - bCat.height;
  }

  nameFilter(aCat: Cat, bCat: Cat) {
    if (this.selectedFilter !== Filters.name) return 0;

    return Number(aCat.breeds[0].name > bCat.breeds[0].name);
  }

  favoriteFilter(aCat: Cat) {
    if (this.selectedFilter !== Filters.favorite) return true;

    return this.favoritesCats[aCat.id];
  }
}

export default new CatsStore();
