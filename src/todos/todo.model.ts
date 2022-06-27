import { Schema, Document } from 'mongoose';

export const TodoSchema = new Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export interface Todo extends Document {
  id: string;
  description: string;
  completed: boolean;
}