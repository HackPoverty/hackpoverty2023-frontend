/** Counterpart to Drupal's Entity Interface */
type Entity = {
  /** The UUID for the node entity */
  id: string;

  /** When the user was created */
  changed: Date;

  /** When the user was created */
  created: Date;
}

/** Counterpart to Drupal's User Interface */
export type User = Entity & {  
  /** The username of the user */
  name: string;
}

/** Counterpart to Drupal's Node Interface */
export type Node = Entity & {  
  /** The title of the piece of content */
  title: string;
}
