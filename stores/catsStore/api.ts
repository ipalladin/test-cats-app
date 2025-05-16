import type { Cat } from "..";

export const getCats = async (): Promise<Cat[]> => {
  return await (
    await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&page=0&limit=10",
      {
        headers: {
          "x-api-key":
            " live_estzTFfbvlxqQhlZCxcwF25VTw6yc8J2QSsn8ihQiumThAttBR5IJdmDVUmtN3NN ",
        },
      }
    )
  ).json();
};
