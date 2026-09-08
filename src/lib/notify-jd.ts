const JD = "jdconley@nxgarms.com";

export async function notifyJd(subject: string, message: string) {
  try {
    await fetch(`https://formsubmit.co/ajax/${JD}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        name: "NXG Arms website",
        email: JD,
        message,
      }),
    });
  } catch {
    /* Command Center still has the order */
  }
}
