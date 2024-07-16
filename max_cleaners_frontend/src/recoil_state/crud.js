export const find_item_index = (arr, key, ele) => {
    const idx = arr.findIndex(item => item[key] === ele);
    return idx;
};

export const filter_items = (arr, key, value) => {
    const filtered_data = arr.filter(item => item[key] === value);
    return filtered_data;
};

export const add_new_item = (set_func, new_item) => {
    set_func(prev => [...prev, new_item])
}

export const update_item_value = (id, setFunc, key, value) => {
    setFunc(prev => {
        const temp = [...prev];
        const idx = temp.findIndex(item => item.id === parseInt(id));
        const new_order_item = {...temp[idx], [key]: value};
        temp[idx] = new_order_item;
        return temp;
    });
}