type Entity = {
  /** The UUID for the node entity */
  id: string;

  /** When the user was created */
  changed: Date;

  /** When the user was created */
  created: Date;

  
}

export type User = Entity & {  
  /** The username of the user */
  name: string;
}

export type Node = Entity & {  
  /** The title of the piece of content */
  title: string;
}
