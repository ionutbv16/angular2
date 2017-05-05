import {OnInit, Component } from '@angular/core';
import {PostItemService} from '../services/postitem.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'item',
  moduleId: module.id,
  templateUrl: 'item.component.html',
  providers: [PostItemService]
})

export class ItemComponent  { 
  name : string;
   
  hobbies: string[];
  showHobbies: boolean;
  post: Post;
  //name = ' UserComponent Angular 2';

  constructor(private PostItemService: PostItemService, private activatedRoute: ActivatedRoute){
    this.name = 'Changed name';
     
    this.post = {label: 'Ttt', cost: '232'} ;
    
     
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let userId = params['id'];
        //console.log(userId);
      });
   


    this.PostItemService.getPosts().subscribe(post => {
        console.log(post);
        this.post = post

    });
  }

 

  

  

 }
 
interface Post {
    label: string,
    cost: string
     
}
