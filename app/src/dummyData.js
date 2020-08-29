
const data = {
  nodes: [
    {id: "0", name: "Cravat", group: "1"},
    {id: "1", name: "Count", group: "1"},
    {id: "2", name: "OldMan", group: "1"},
    {id: "3", name: "Lazare", group: "2"},
    {id: "4", name: "Valdemar", group: "2"},
    {id: "5", name: "Marguerite", group: "2"},
    {id: "6", name: "Mme.deR", group: "2"},
  ],
  edges: [
    {
      source: "0",
      target: "1",
      value: 1
    },
    {
      source: "2",
      target: "3",
      value: 2
    },
    {
      source: "3",
      target: "4",
      value: 1
    },
    {
      source: "4",
      target: "5",
      value: 1
    },
    {
      source: "5",
      target: "6",
      value: 1
    },
    {
      source: "6",
      target: "0",
      value: 1
    },
    {
      source: "6",
      target: "4",
      value: 1
    }
  ]
};
export default data;
