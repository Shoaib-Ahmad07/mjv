import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './schema/blog'
import {clicnt} from './schema/clicnt'
import {insight} from './schema/Insight'
import {post} from './schema/post'
import {category} from './schema/category'
import {servicess} from './schema/Servicess'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,clicnt,insight,post, category, servicess],
}
