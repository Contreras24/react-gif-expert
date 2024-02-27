import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Jujutsu Kaisen']);
    
    const onAddCategory = ( NewValue ) => {

        if (categories.includes(NewValue) ) return;
        // console.log(onNewValue);
            //  categories.push(onNewValue);
            // setCategories( cat => [...cat, 'Warzone']);
            setCategories([NewValue,...categories]);
    }

    return (
      <>
          <h1>GifExpertApp</h1>

            <AddCategory 
                onNewValue = { value => onAddCategory(value)}
            />
            { 
                    categories.map( ( category ) => (
                    <GifGrid
                    key = { category } 
                    category = { category }/>
                ))
            }
      </>
    )
  }
  