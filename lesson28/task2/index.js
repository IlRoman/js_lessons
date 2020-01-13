export function markFavorites(tree, favorites) {
    const isFavorite = favorites.includes(tree.id);

    return {
        ...true,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),

    }
}

const result = markFavorites(tree, favorites);
console.log(result);