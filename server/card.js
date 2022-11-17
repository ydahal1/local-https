exports.createFileStuckMessageCard = () => {
  return {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    summary: "Manual Verification Required",
    themeColor: "#2196F3",
    text: "<message content here>",
    title: "Manual Verification Required",
    potentialAction: [
      {
        "@type": "HttpGET",
        name: "Approve",
        target: "http://localhost:3001/api/test",
        body: "verification.approve",
      },
    ],
  };
}