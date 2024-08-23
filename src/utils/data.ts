// export const getFormattedDate = (date: Date) =>
//   new Date(date).toLocaleDateString("ko-KR", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//   });

export const getFormattedDate = (date: Date) =>
  new Date(date)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, "."); // Format the date with dots, replace hyphens if needed
