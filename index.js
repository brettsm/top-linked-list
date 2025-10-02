import { LinkedList } from './datastructures/linkedList.js';

const ll = new LinkedList();

ll.append("dog");
ll.append("cat");
ll.append("parrot");
ll.append("hamster");
ll.append("snake");
ll.append("turtle");

ll.toString();

ll.insertAt("Hello", 3);
ll.toString();

ll.insertAt("Okay Garmin", 0);
ll.toString();

ll.pop();
ll.toString();
