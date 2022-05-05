let villaItems = [{
    id: 1,
    name: 'chalet-style Aspen home',
    image:'https://i.ibb.co/S723RhT/001-villa.jpg',
    price: '2000$',
    address: 'Aspen',
    reviews:'05',
    totalarea: '7.600 sq ft (710 m²)',
    description: 'A chalet-style Aspen home that combines privacy with in-town',
},
{
    id: 2,
    name: 'luxury home',
    image:'https://i.ibb.co/C84PRLx/002-villa.jpg',
    price: '2500$',
    address: 'Aspen',
    reviews:'01',
    totalarea: '7.600 sq ft (710 m²)',
    description: 'A chalet-style Aspen home that combines privacy with in-town',
},
{
    id: 3,
    name: 'Beautiful villa',
    image:'https://i.ibb.co/XyMk7Nt/003-villa.jpg',
    price: '3000$',
    address: 'Aspen',
    reviews:'02',
    totalarea: '7.600 sq ft (710 m²)'
},
{
    id: 4,
    name: 'Mountain villa',
    image:'https://i.ibb.co/ZTqxSs1/004-villa.jpg',
    price: '3500$',
    address: 'Aspen',
    reviews:'03',
    totalarea: '7.600 sq ft (710 m²)',
    description: 'A chalet-style Aspen home that combines privacy with in-town',
},
{
  id: 5,
  name: 'villa whit Pool',
  image:'https://i.ibb.co/s2R9w7M/005-villa.jpg',
  price: '3500$',
  address: 'Aspen',
  reviews:'04',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Aspen home that combines privacy with in-town',
},
{
  id: 6,
  name: 'white villa',
  image:'https://i.ibb.co/fqDP3ZN/006-villa.jpg',
  price: '3500$',
  address: 'Alpeis',
  reviews:'06',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Alpeis home that combines privacy with in-town',
},
{
  id: 7,
  name: 'tropic villa',
  image:'https://i.ibb.co/JvSWbgZ/007-villa.jpg',
  price: '3500$',
  address: 'Alpeis',
  reviews:'07',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Alpeis home that combines privacy with in-town',
},
{
  id: 8,
  name: 'small villa',
  image:'https://i.ibb.co/Z60QhfV/008-villa.jpg',
  price: '3500$',
  address: 'Alpeis',
  reviews:'08',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Alpeis home that combines privacy with in-town',
},
{
  id: 9,
  name: 'villa in beatch',
  image:'https://i.ibb.co/N9Hb9qY/009-villa.jpg',
  price: '3500$',
  address: 'Alpeis',
  reviews:'09',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Alpeis home that combines privacy with in-town',
},
{
  id: 10,
  name: 'Terrace Villa',
  image:'https://i.ibb.co/612PqxK/010-villa.jpg',
  price: '3500$',
  address: 'Alpeis',
  reviews:'10',
  totalarea: '7.600 sq ft (710 m²)',
  description: 'A chalet-style Alpeis home that combines privacy with in-town',
},
];
  
  // initial Store
  const initialStore = {
    villas: villaItems,
    signle_villa: [],
    search_villa: [],
    booking_villa: []
  };
  
  // reducer
  function reducer(state = initialStore, action) {
        if (action.type === "GET_ALL_VILLA") {
          // console.log('GET_ALL_VILLA ',state);

          return { ...state};
        }
        if (action.type === "GET_SINGLE_VILLA_SUCCESS") {
            let list = state.villas.filter((record) => (record.id == action.payload.id));
            // console.log('GET_SINGLE_VILLA_SUCCESS ',list);
            return {...state,signle_villa: list};
        }

        if (action.type === "GET_SEARCH") {
          const { value } = action.payload;
          const { villas } = state;
          let tempProducts = [...villas];

          tempProducts = tempProducts.filter((villa) => {
            return villa.address.toLowerCase().startsWith(value.toLowerCase());
          });
          // console.log('tempProducts',JSON.stringify(tempProducts) );
          // console.log('value',value );
          return { ...state, search_villa: tempProducts };
        }

        if (action.type === "GET_BOOKING") {
          let list = state.villas.filter((record) => (record.id == action.payload.id));
          // console.log('GET_BOOKING ',list);

          return { ...state,booking_villa: [...state.booking_villa, list] };

        }
    
        return state;
    }


  
  export default reducer;
  