import {OnInit, Component } from '@angular/core';
import {PostItemService} from '../services/postitem.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'cart',
  moduleId: module.id,
  templateUrl: 'cart.component.html',
  providers: [PostItemService]
})

export class CartComponent  { 
  name : string;
   cookies: Object;
   keys: Array<string>;
  hobbies: string[];
  showHobbies: boolean;
  post: Post;
  checkName: string;
  cartItems: Array<Object>;
  itemFound : boolean;
  cValue: Object;
  //name = ' UserComponent Angular 2';

  constructor(private PostItemService: PostItemService, private activatedRoute: ActivatedRoute){
    this.name = 'Changed name';
    //this.update(); 
    //this.addCookie("cname", "cValue" ) ;
    this.checkName = 'cname';
    this.cartItems = [];
    this.checkCookie();
    if(this.getCartItems()) this.cartItems = JSON.parse(this.getCartItems());

    this.PostItemService.getPosts().subscribe(post => {
        console.log(post);
        this.post = post;
        this.itemFound = false;
        console.log("Add item ", this.post);
        for (var i=0 ; i < this.cartItems.length ; i++) {

                  if (this.cartItems[i]["reference"] === post["reference"]  ) {
                     //  
                     this.itemFound = true;
                  }
         }
         if (this.itemFound == false) {
              this.cartItems.push(this.post);
              console.log("new item added ", this.post);
          }

          
          this.addCookie('cart', this.cartItems) ;
  
         console.log("Cart Items ", this.cartItems);


    });
     

      
 }

 getCartItems() {
    if (Cookie.get('cart')) {
        return  Cookie.get('cart');
     }
 }

 update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }

  addCookie(cName: string, cValue: Object) {
    console.log('Setting cookie ', cName, cValue);
    Cookie.set(cName, JSON.stringify(cValue));
    //this.update();
  }

  checkCookie() {
     
     console.log(Cookie.get('cname')) ; 
  }
   
    


}
 
interface Post {
    label: string,
    cost: string
     
}
