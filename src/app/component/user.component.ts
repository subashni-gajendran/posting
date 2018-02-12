import { Component } from '@angular/core';
import { PostsService } from '../services/post.services';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
      this.name = 'Subashni Gajendran';
      this.email = 'subaappu@gmail.com';
      this.address = {
      street: 'Unit 312, 100 Parkway Forest Drive',
      city: 'Toronto',
      state: 'ON'
     }
     this.hobbies= ['Music', 'Movies', 'Sports'];
     this.showHobbies= false;
     this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
     });
  }

  toggleHobbies() {
    
      if(this.showHobbies == true){
        this.showHobbies = false;
      } else {
        this.showHobbies = true;
      }
  }

  addHobby(hobby: any){
    this.hobbies.push(hobby);
  }

  deleteHobby(i: any){
    this.hobbies.splice(i,1);
  }
}

interface address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}