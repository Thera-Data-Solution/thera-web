export const getTenantId = () => {
  const host = window.location.hostname;
  switch (host) {
    case "localhost":
      return "c78ae261-d987-4570-9220-774846531ddf";
    case "theravickya":
      return "c78ae261-d987-4570-9220-774846531ddf";
    case "breathworkalchemy":
      return "788";
    default:
      return null;
  }
};