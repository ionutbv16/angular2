import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import  'rxjs/add/operator/map';
import {Router, ActivatedRoute, Params,} from '@angular/router';

@Injectable()

export class PostItemService {
    constructor(private http: Http,private activatedRoute: ActivatedRoute, private router: Router) {
        
        console.log('PostItemService' );

        
    }

   
   

    getPosts( ) {
        //var ref = $routeParams.ref;
        var finalUrl ;
        var ref;
/*         
          let ref = this.getParam();
          console.log("ref",ref);
          return this.http.get('https://colossustest.herokuapp.com/api/items/'+ref+'.json').map (
            
            res => res.json()
            
        );

 */         
        this.activatedRoute.params.subscribe((params: Params) => {
         ref = params['id'];
        console.log("PostItemService activatedRoute.params",ref);
         
 
      });
 
       // var ref = 100001;
        return this.http.get('https://colossustest.herokuapp.com/api/items/'+ref+'.json').map (
            
            res => res.json()
            
        );
 
    }


}




