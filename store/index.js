export const state = () => ({
  blogPosts: [],
  days: [{
      id: 1,
      title: 'Day 1',
      datetime: 'Jan 29th, 2020 (9 AM - 5 PM)',
    },
    {
      id: 2,
      title: 'Day 2',
      datetime: 'Jan 30th, 2020 (9 AM - 5 PM)',
    },
    {
      id: 3,
      title: 'Day 3',
      datetime: 'Jan 31th, 2020 (9 AM - 5 PM)',
    },
  ],
  events: [{
      id: 1,
      time: '10 AM',
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 1',
      speakerTitle: 'CEO of Crux.io',
      image: 'https://picsum.photos/id/144/300/300',
      dayId: 1,
    },
    {
      id: 2,
      time: '12 PM',
      title: 'Event 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 2',
      speakerTitle: 'CTO Lorem Enterprises',
      image: 'https://picsum.photos/id/145/300/300',
      dayId: 1,
    },
    {
      id: 3,
      time: '3 PM',
      title: 'Event 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 3',
      speakerTitle: 'Ralph Tekgai',
      image: 'https://picsum.photos/id/146/300/300',
      dayId: 1,
    },
    {
      id: 4,
      time: '10 AM',
      title: 'Event 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 4',
      speakerTitle: 'CEO of Crux.io',
      image: 'https://picsum.photos/id/147/300/300',
      dayId: 2,
    },
    {
      id: 5,
      time: '12 PM',
      title: 'Event 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 5',
      speakerTitle: 'CTO Lorem Enterprises',
      image: 'https://picsum.photos/id/154/300/300',
      dayId: 2,
    },
    {
      id: 6,
      time: '3 PM',
      title: 'Event 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 6',
      speakerTitle: 'Ralph Tekgai',
      image: 'https://picsum.photos/id/149/300/300',
      dayId: 2,
    },
    {
      id: 7,
      time: '10 AM',
      title: 'Event 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 7',
      speakerTitle: 'CEO of Crux.io',
      image: 'https://picsum.photos/id/153/300/300',
      dayId: 3,
    },
    {
      id: 8,
      time: '12 PM',
      title: 'Event 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 8',
      speakerTitle: 'CTO Lorem Enterprises',
      image: 'https://picsum.photos/id/151/300/300',
      dayId: 3,
    },
    {
      id: 9,
      time: '3 PM',
      title: 'Event 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speaker: 'Speaker 9',
      speakerTitle: 'Ralph Tekgai',
      image: 'https://picsum.photos/id/152/300/300',
      dayId: 3,
    },
  ],
  speakers: [{
      name: 'Speaker 1',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=60'
    },
    {
      name: 'Speaker 2',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=50'
    },
    {
      name: 'Speaker 3',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=51'
    },
    {
      name: 'Speaker 4',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=52'
    },
    {
      name: 'Speaker 5',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=53'
    },
    {
      name: 'Speaker 6',
      title: 'Position at Company',
      image: 'https://i.pravatar.cc/350?img=54'
    },
  ],
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }) {
    let files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}