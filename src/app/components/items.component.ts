import { Component } from '@angular/core';
import {PostsService} from '../services/post.service'

@Component({
  selector: 'items',
  moduleId: module.id,
  templateUrl: 'items.component.html',
  providers: [PostsService]
})

export class ItemsComponent  { 
  name : string;
  address:address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  //name = ' UserComponent Angular 2';

  constructor(private postsService: PostsService){
    this.name = 'Changed name';
    this.address = {street : 'My street', flat: '10 Flat'}
    this.hobbies = ['Music', 'Piano'] ;
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
        console.log(posts);
        this.posts = posts

    });
  }

  toggleHobbies () {
        console.log('toggle');
        this.showHobbies = !this.showHobbies;
 }

  addHobby (hobby) {
      this.hobbies.push(hobby);
        console.log('addHobby', hobby);
  }

   deleteHobbies (ind) {
      this.hobbies.splice(ind,1);
      console.log('deleteHobbies', ind);
  }

 }

interface address {
    street: string;
    flat: string;
    
}

interface Post {
    id: number,
    title: string
     
}
