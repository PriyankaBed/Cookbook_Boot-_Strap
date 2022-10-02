const normalRecipe = `
<tr>
    <th scope="row">1</th>
    <td>½ cup water (warm)</td>
    <td>½ cup curd / yogurt (thick)</td>
    <td>3 tbsp pizza sauce</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>1 tsp sugar</td>
    <td>½ capsicum (red & green, sliced)</td>
    <td>¼ tsp chilli flakes</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>1 tsp dry yeast</td>
    <td>½ onion </td>
    <td>¼ tsp mixed herbs</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>plain flour</td>
    <td>¼ tsp salte</td>
    <td>few olives</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>2 tbsp + 1 tsp olive oil</td>
    <td>1 tsp lemon juice</td>
    <td>½ cup mozzarella cheese (grated)</td>
</tr>
`;

const smallRecipe = `
<tr>
    <th scope="row">1</th>
    <td>½ cup water (warm)</td>
    <td>½ cup curd / yogurt (thick)</td>
    <td>1 tbsp pizza sauce</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>½ tsp sugar</td>
    <td>½ capsicum (red & green, sliced)</td>
    <td>¼ tsp chilli flakes</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>½ tsp dry yeast</td>
    <td>½ onion </td>
    <td>tsp mixed herbs</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>plain flour</td>
    <td>¼ tsp salte</td>
    <td>few olives</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>2 tbsp + 1 tsp olive oil</td>
    <td>1 tsp lemon juice</td>
    <td>½ cup mozzarella cheese (grated)</td>
</tr>`;

const largeRecipe = `
<tr>
    <th scope="row">1</th>
    <td>1.5 cup water (warm)</td>
    <td>1 cup curd / yogurt (thick)</td>
    <td>4 tbsp pizza sauce</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>3 tsp sugar</td>
    <td>1 capsicum (red & green, sliced)</td>
    <td>1 tsp chilli flakes</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>1 tsp dry yeast</td>
    <td>1 onion </td>
    <td>1 tsp mixed herbs</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>plain flour</td>
    <td>1 tsp salte</td>
    <td>few olives</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>3 tbsp + 1 tsp olive oil</td>
    <td>2 tsp lemon juice</td>
    <td>1 cup mozzarella cheese (grated)</td>
</tr>`;

/*------------- for button ---------- */
$(document).ready(() => {
    $("#ingrediant").append(normalRecipe);

    $('[type="checkbox"]').change(function () {
        if (this.checked) {
            $('[type="checkbox"]').not(this).prop("checked", false);
        }
    });
    $("#applyButton").on("click", () => {
        var data = ``;
        $("#ingrediant").empty();

        if ($("#flexCheckDefaultLarge").prop("checked")) $("#ingrediant").append(largeRecipe);
        if ($("#flexCheckChecked").prop("checked")) $("#ingrediant").append(normalRecipe);
        if ($("#flexCheckDefaultSmall").prop("checked")) $("#ingrediant").append(smallRecipe);
    });

    $("#shareButton").on("click", () => {
        alert("Paneer pizza share button pressed!");
    });
});
