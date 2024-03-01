
const onGetEntity = (evt: Event) => {
    const { definitionName, id } = (evt as CustomEvent<{ definitionName: string; id: number }>).detail;
    
    alert('Entity with id '+id+' and definition '+definitionName)
}

window.addEventListener('Get the entity with the specified id', onGetEntity)

const updateCommentTab = (count: number) => {
    const tabCommentsElement = document.getElementById("tab-comments");
    if (tabCommentsElement?.children[0]) {
        tabCommentsElement.children[0].innerHTML = `Comments (${count})`;
    }
}

export default function CreateExternalRoot(rootElement: HTMLElement) {

    return {
        render(context: any) { 
            updateCommentTab(context.entity.relations.AssetToDiscussion.length);
        },
        unmount() {
            rootElement.innerHTML = ""
        }
    }
}