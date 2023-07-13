import { Virtuoso } from "react-virtuoso"

export default function App( props: {} ) {

	return <Virtuoso
		style={ { height: "400px" } }
		totalCount={ 200 }
		itemContent={ ( index ) => <div>Item { index }</div> }
	/>
}