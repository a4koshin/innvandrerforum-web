export async function getErrorMessage(res: Response): Promise<string> {
  try {
    const data = await res.json();
    console.log(data.message, "from helper");

    return data?.message || "Something went wrong";
  } catch {
    return "Something went wrong";
  }
}
