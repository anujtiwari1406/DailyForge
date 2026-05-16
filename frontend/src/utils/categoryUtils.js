export const CATEGORIES = [
  "Upskilling",
  "College",
  "Personal",
  "Health",
  "Finance",
  "Other"
];

export const getCategoryColor = (category) => {
  const colors = {
    Upskilling: "bg-blue-100 text-blue-700",
    College: "bg-purple-100 text-purple-700",
    Personal: "bg-green-100 text-green-700",
    Health: "bg-red-100 text-red-700",
    Finance: "bg-yellow-100 text-yellow-700",
    Other: "bg-gray-100 text-gray-700",
  };
  return colors[category] || colors.Other;
};
