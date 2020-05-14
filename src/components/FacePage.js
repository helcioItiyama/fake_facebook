import React, {Component} from 'react';
import FaceHeader from './FaceHeader';
import Post from './Post';

class FaceHead extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        date: "14 Maio 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptatum sed veritatis quia sequi optio. Atque aut voluptates vel eaque sit provident tempore sint quam! Repellat nobis in voluptatum numquam?",
        comments: [
          {
            id: 1,
            author: {
              name: "Débora de Assis",
              avatar: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis a sapiente natus unde pariatur quis soluta quibusdam itaque, doloribus blanditiis. Odit autem culpa debitis dolore officia eos voluptatum ducimus?"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Henrique Santos",
          avatar: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        date: "14 Maio 2020",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur voluptatibus quas et ipsam! Quod atque non aliquid eius aspernatur commodi cum in quas necessitatibus, quo doloremque quisquam delectus debitis?",
        comments: [
          {
            id: 1,
            author: {
              name: "Viviane Albuquerque",
              avatar: "https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae laudantium expedita illum architecto ad aliquam mollitia atque? Expedita possimus nisi dicta odit accusantium sequi laborum numquam, tempora aut voluptatibus."
          },
          {
            id: 2,
            author: {
              name: "Fabiana Araújo",
              avatar: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            },
            content: "Lorem ipsum dolor sit amet consectetur, repellendus facilis quibusdam sequi vero quas officia."
          },
        ]
      },
      {
        id: 3,
        author: {
          name: "Amanda Souza",
          avatar: "https://images.unsplash.com/photo-1508215302842-8a015a452a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        date: "13 Maio 2020",
        content: "Lorem exercitationem, velit dolore, iste cum magnam facere perspiciatis recusandae?",
        comments: [
          {
            id: 1,
            author: {
              name: "Débora de Assis",
              avatar: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            },
            content: "?"
          },
          {
            id: 2,
            author: {
              name: "Veronica Martinez",
              avatar: "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit?"
          },
        ]
      }
    ]
  };


  render() {
    return(
      <>
        <FaceHeader/>
        {this.state.posts && this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </>
    )
  }
}

export default FaceHead;