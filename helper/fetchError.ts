// helper/fetchError.ts
export async function getErrorMessage(res: Response): Promise<string> {
  try {
    const text = await res.text(); // ✅ SAFE
    console.log(text);
    if (!text) {
      return "Something went wrong";
    }

    try {
      const data = JSON.parse(text);
      return data?.message || "Something went wrong";
    } catch {
      // Not JSON (HTML / empty / text)
      return text;
    }
  } catch {
    return "Something went wrong";
  }
}
