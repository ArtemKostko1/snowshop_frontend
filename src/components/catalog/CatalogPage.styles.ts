const layout = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "flex-start",
  gap: 32,
  width: "100%",
};

const leftPanel = {
  minWidth: 220,
  marginTop: 8,
};

const rightPanel = {
  flex: 1,
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

export default {
  layout,
  leftPanel,
  rightPanel,
  topBar,
};
