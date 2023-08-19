import { Dropdown } from "./components/dropdown/dropdown.mjs";
import { SearchMenu } from "./components/searchMenu/searchMenu.mjs";
import { TextArea } from "./components/textArea/textarea.mjs";
import { Tooltip } from "./components/tooltip/tooltip.mjs";

customElements.define("drop-down", Dropdown);

customElements.define("tool-tip", Tooltip);

customElements.define("text-area", TextArea);

customElements.define("search-menu", SearchMenu);
