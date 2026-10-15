export function slugFromRecipeId(id: string): string {
  return id.replace(/\.md$/, '');
}
