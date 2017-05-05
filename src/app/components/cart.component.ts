import {OnInit, Component } from '@angular/core';
import {PostItemService} from '../services/postitem.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cart',
  moduleId: module.id,
  templateUrl: 'cart.component.html',
  providers: [PostItemService]
})

export class CartComponent  { 
  name : string;
   
  hobbies: string[];
  showHobbies: boolean;
  post: Post;
  //name = ' UserComponent Angular 2';

  constructor(private PostItemService: PostItemService, private activatedRoute: ActivatedRoute){
    this.name = 'Changed name';
     
      
 }

}
 
interface Post {
    label: string,
    cost: string
     
}
