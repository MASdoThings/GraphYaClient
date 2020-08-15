
const data = {
  nodes: [
    {id: "Cravat", group: 1},
    {id: "Count", group: 1},
    {id: "OldMan", group: 1},
    {id: "Lazare", group: 2},
    {id: "Valdemar", group: 2},
    {id: "Marguerite", group: 2},
    {id: "Mme.deR", group: 2},
  ],
  edges: [
    {
      source: "OldMan",
      target: "Valdemar",
      value: 1
    },
    {
      source: "Count",
      target: "Valdemar",
      value: 2
    },
    {
      source: "Cravat",
      target: "Valdemar",
      value: 1
    },
    {
      source: "Lazare",
      target: "Marguerite",
      value: 1
    },
    {
      source: "Lazare",
      target: "Mme.deR",
      value: 1
    },
    {
      source: "Mme.deR",
      target: "OldMan",
      value: 1
    },
    {
      source: "OldMan",
      target: "Lazare",
      value: 1
    }
  ]
};
export default data;
