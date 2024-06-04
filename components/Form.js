

const initialFruit = {
  slug: "fruit-page",
  title: "Your Fruit",
  icon: "🍌",
  color: "#fcf5c7",
  description: "enter a description for your Fruit",
};

export default function FruitForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const slug = data.slug;
    const title = data.title;
    const icon = data.icon;
    const color = data.color;
    const description = data.description;

    const newTheme = {
      slug: `${slug}`,
      title: `${title}`,
      icon: `${icon}`,
      color: `${color}`,
      description: `${description}`,
    };

    onSubmit(newTheme);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> add a new Fruit Site</h2>
      <input
        aria-label="Fruit page title"
        type="text"
        placeholder="Fruit Name"
        name="title"
        required
      />

      <input
        aria-label="create slug for the page"
        type="text"
        placeholder="enter fruitname-page"
        name="slug"
        required
      />
      <select name="icon">
        <option>🍉</option>
        <option>🥝</option>
        <option>🍋</option>
        <option>🍊</option>
        <option>🍇</option>
      </select>

    

<textarea rows="4" cols="50" placeholder="describe your fruit in a few words" name="description">

</textarea>


<label htmlfor="color">Select a color</label>
<input 
            type="color"
            name="color"
            aria-label="select background color"
            defaultValue="#fcf5c7"
            required/>
             <button type="submit">
        Add Fruit
      </button>
    </form>
    
  );
}
