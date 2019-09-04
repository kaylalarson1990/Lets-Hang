export const MockEvents = {
  events: [
    {
      id: 1,
      title: "Happy Hour",
      address: "1234 Happy Hour St, Denver, CO",
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
      address: "1234 Wing Lane, Denver, CO",
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
      address: "1234 Taco Ave, Denver, CO",
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
      title: "Wine Down",
      address: "1234 Wine Rd, Denver, CO",
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
  name: "Ryan"
};

export const MockFriends = {
  friends: [
    { name: "Sergio", phone: "650-123-8999", email: "ss@gmail.com" },
    { name: "Klio", phone: "123-456-2890", email: "klj@gmail.com" },
    { name: "Anneke", phone: "456-477-9009", email: "amg@gmail.com" }
  ]
};

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
