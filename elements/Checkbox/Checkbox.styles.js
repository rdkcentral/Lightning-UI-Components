const Check =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAACYjX/eAAABKElEQVQ4EbXSO04DMRAGYHtlWaJYpYMcgSBxAUhFi1KkoUrBJVLmENR0XIDUFOQSCTT0SJEziLXzFOzwD3lIWbLahIAby/b42xnPavUHw3t/OJvxPaj3aF9vjqkOszqDVdL7gCGEo+mUH5n5RGvds1Zd/NoTbDDwPecSxtyVTP8Hg36Fr9S31ReZPeVmhoMANHUuXBehhRiAKIp0E4+KN+VbomEtDwVWRgPQTa4sGxDHcX9jPDJsSQnO+RFRUs0GCYaz59wysxdkDfRmfiF5Iwqny5hdsdV/KGUDvQPUUEq/GmPOjfkcTybcUYqPC8tcZLACZQ3UEPk2/vpLLF8Af+yCibEGygbQA5T8gPn7LbfNTO7K+AHKJhGX0jS00Xlrra7ndlOCM+MLVJf04NpHPKcAAAAASUVORK5CYII=';
import { getHexColor } from '../../Styles';
export default theme => ({
  w: 54,
  h: 54,
  radius: 54 / 2,
  background: {
    color: getHexColor('#018558', 100)
  },
  stroke: { color: theme.palette.grey[0], width: 2 },
  check: {
    w: 23,
    h: 16,
    src: Check
  }
});
