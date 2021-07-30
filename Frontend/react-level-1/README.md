# Checkbox challenge

## Instructions

Build a simple **React** application to handle multiple selection in lists.

### The subject

1. Display 5 checkboxes
2. The first one will select/unselect every checkboxes
3. The others will select themselves
4. Checking all items will select the "select all" checkbox automatically

**Some possible cases:**

```m
[ ] Select all

[ ] Item 1
[ ] Item 2
[ ] Item 3
[ ] Item 4
```

```m
[x] Select all

[x] Item 1
[x] Item 2
[x] Item 3
[x] Item 4
```

```m
[ ] Select all

[x] Item 1
[ ] Item 2
[x] Item 3
[x] Item 4
```

## How to use

I used create-react-app for this exercice. Use 
``
yarn start
``
to launch the app in localhost mode.

I used [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) to manage CSS 
