import { User } from './User';
import { Post } from './Post';

export interface PreparedPost extends Post {
  user: User;
  comments: Comment[];
}
