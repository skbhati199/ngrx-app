import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: '',
    redirectTo:'counter',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
