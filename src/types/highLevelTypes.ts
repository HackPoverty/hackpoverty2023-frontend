/** Counterpart to Drupal's Entity Interface */
type Entity<T> = {
  /** The UUID for the node entity */
  id: string;

  /** When the user was created */
  changed: Date;

  /** When the user was created */
  created: Date;
} & T;

/** Counterpart to Drupal's User Interface */
export type User<T> = Entity<T> & {  
  /** The username of the user */
  name: string;
}

/** Counterpart to Drupal's Node Interface */
export type Node<T> = Entity<T> & {  
  /** The title of the piece of content */
  title: string;
}
