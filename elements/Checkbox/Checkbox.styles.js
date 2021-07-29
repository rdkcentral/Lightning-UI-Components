const Check =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAACYjX/eAAABKElEQVQ4EbXSO04DMRAGYHtlWaJYpYMcgSBxAUhFi1KkoUrBJVLmENR0XIDUFOQSCTT0SJEziLXzFOzwD3lIWbLahIAby/b42xnPavUHw3t/OJvxPaj3aF9vjqkOszqDVdL7gCGEo+mUH5n5RGvds1Zd/NoTbDDwPecSxtyVTP8Hg36Fr9S31ReZPeVmhoMANHUuXBehhRiAKIp0E4+KN+VbomEtDwVWRgPQTa4sGxDHcX9jPDJsSQnO+RFRUs0GCYaz59wysxdkDfRmfiF5Iwqny5hdsdV/KGUDvQPUUEq/GmPOjfkcTybcUYqPC8tcZLACZQ3UEPk2/vpLLF8Af+yCibEGygbQA5T8gPn7LbfNTO7K+AHKJhGX0jS00Xlrra7ndlOCM+MLVJf04NpHPKcAAAAASUVORK5CYII=';

export default theme => ({
  w: 32,
  h: 32,
  radius: 4,
  background: { color: theme.palette.background.default },
  stroke: { color: theme.palette.grey[5], width: 4 },
  check: { w: 20, h: 14, src: Check }
});
