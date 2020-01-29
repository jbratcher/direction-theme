export const state = () => ({
  blogPosts: [{
      id: 1,
      title: 'Post 1',
      body: 'Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis',
      image: '/img/event-details-1.jpg'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis',
      image: '/img/event-details-2.jpg'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Ut ut lobortis augue. Phasellus venenatis metus non metus congue, eget fermentum ipsum porttitor. Nunc nec mi a ligula suscipit pulvinar eu ut risus. Vivamus egestas neque vel nibh imperdiet, ac laoreet tellus imperdiet. Aliquam erat volutpat. Nam orci ex, placerat quis imperdiet vel, sagittis quis neque. Donec eget interdum ante, eu facilisis turpis',
      image: '/img/event-details-3.jpg'
    },
  ],
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
      hightlight: true,
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
      hightlight: true,
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
      hightlight: true,
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
      hightlight: false,
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
      hightlight: false,
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
      hightlight: false,
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
      hightlight: false,
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
      hightlight: false,
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
      hightlight: false,
      dayId: 3,
    },
  ],
  packages: [{
      name: 'Individual',
      price: '$100',
      icon: 'mdi-account',
      image: '/img/event-details-1.jpg',
      features: ['3 day pass', 'Free Coffe', 'Networking', 'Certificate', 'Swag Bag']
    },
    {
      name: 'VIP',
      price: '$300',
      icon: 'mdi-account-plus',
      image: '/img/event-details-2.jpg',
      features: ['3 day pass', 'Free Coffe', 'Networking', 'Certificate', 'Swag Bag', 'Advertisment in Event Packet', 'Lunch & Dinner', 'Sponsored Listing']
    },
    {
      name: 'Team',
      price: '$1000',
      icon: 'mdi-account',
      image: '/img/event-details-3.jpg',
      features: ['3 day pass', 'Free Coffe', 'Networking', 'Certificate', 'Swag Bag', 'Advertisment in Event Packet', 'Lunch & Dinner']
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
  sponsors: [{
      name: 'Github',
      icon: 'mdi-github-circle',
      to: 'https://www.github.com',
      top: false
    },
    {
      name: 'Gitlab',
      icon: 'mdi-gitlab',
      to: 'https://www.gitlab.com',
      top: false
    },
    {
      name: 'Apple',
      icon: 'mdi-apple',
      to: 'https://www.apple.com',
      top: false
    },
    {
      name: 'Facebook',
      icon: 'mdi-facebook',
      to: 'https://www.facebook.com',
      top: false
    },
    {
      name: 'Lightbulb',
      icon: 'mdi-lightbulb',
      to: 'https://www.lightbulb.com',
      top: false
    },
    {
      name: 'Github Alt',
      icon: 'mdi-github-face',
      to: 'https://www.githubalt.com',
      top: false
    },
    {
      name: 'Twitter',
      icon: 'mdi-twitter',
      to: 'https://www.twitter.com',
      top: true
    },
    {
      name: 'Global Systems',
      icon: 'mdi-earth',
      to: 'https://www.globalsystems.com',
      top: true
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