/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const Check =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAACYjX/eAAABKElEQVQ4EbXSO04DMRAGYHtlWaJYpYMcgSBxAUhFi1KkoUrBJVLmENR0XIDUFOQSCTT0SJEziLXzFOzwD3lIWbLahIAby/b42xnPavUHw3t/OJvxPaj3aF9vjqkOszqDVdL7gCGEo+mUH5n5RGvds1Zd/NoTbDDwPecSxtyVTP8Hg36Fr9S31ReZPeVmhoMANHUuXBehhRiAKIp0E4+KN+VbomEtDwVWRgPQTa4sGxDHcX9jPDJsSQnO+RFRUs0GCYaz59wysxdkDfRmfiF5Iwqny5hdsdV/KGUDvQPUUEq/GmPOjfkcTybcUYqPC8tcZLACZQ3UEPk2/vpLLF8Af+yCibEGygbQA5T8gPn7LbfNTO7K+AHKJhGX0jS00Xlrra7ndlOCM+MLVJf04NpHPKcAAAAASUVORK5CYII=';

export default {
  w: 32,
  h: 32,
  radius: 4,
  background: { color: 0xff141417 },
  stroke: { color: 0xfff6f6f9, width: 4 },
  check: { w: 20, h: 14, src: Check }
};
