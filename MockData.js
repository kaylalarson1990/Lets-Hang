export const MockEvents = {
  events: [
    {
      id: 1,
      title: "Happy Hour",
      description:
        "Planning on meeting at Brothers at 6pm for happy hour today!",
      time: "6:00 pm",
      name: "Anneke",
      attending: [
        { name: "Anneke", checked_in: false },
        { name: "Kayla", checked_in: true }
      ]
    },
    {
      id: 2,
      title: "Wing Night",
      description:
        "Planning on meeting at Pub on Penn at 4pm for a fun Wednesday night wing night!",
      time: "4:00 pm",
      name: "Ryan",
      attending: [
        { name: "Anneke", checked_in: false },
        { name: "Kayla", checked_in: true }
      ]
    },
    {
      id: 3,
      title: "Taco Tuesday",
      description: "Planning on meeting at Machete at 5pm for taco Tuesday!",
      time: "5:00 pm",
      name: "Logan",
      attending: [
        { name: "Anneke", checked_in: false },
        { name: "Kayla", checked_in: true }
      ]
    },
    {
      id: 4,
      title: "Wine Down Wednesday",
      description: "Planning on meeting at Barcelona at 4pm for a wine night!",
      time: "4:00 pm",
      name: "Kayla",
      attending: [
        { name: "Anneke", checked_in: false },
        { name: "Kayla", checked_in: true }
      ]
    }
  ]
};

export const MockUser = {
  name: 'Ryan'
}

export const MockUserEvents = {
  users: [
    {
      id: 1,
      name: "Ryan",
      event_id: 2,
      checked_in: false
    },
    {
      id: 2,
      name: "Kayla",
      event_id: 2,
      checked_in: false
    },
    {
      id: 3,
      name: "Anneke",
      event_id: 3,
      checked_in: false
    },
    {
      id: 3,
      name: "Anneke",
      event_id: 1,
      checked_in: false
    },
    {
      id: 4,
      name: "Logan",
      event_id: 3,
      checked_in: false
    }
  ]
};
