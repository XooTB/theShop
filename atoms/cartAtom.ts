import { Atom, atom } from "jotai";
import { productInterface1 } from "@/interfaces/product";

export const cartAtom = atom<productInterface1[]>([]);
