import React,{Component} from 'react'
import axios from '../../axios'
import OneCard from '../../components/shopProducts/product/onecard'
class Product extends Component{
    state={
        product:null,
        loadingProduct:false
    }
    componentDidMount(){
        console.log("Rendered props",this.props);
        
        let productId=this.props.renderProps.match.params.id;
        let url="/latestproducts/"+productId;
        axios.get(url)
        .then(response=>{
   //       console.log("Product data",response.data);
          this.setState({
              product:response.data.product,
              loadingProduct:true
          }) 
                       
        })
        .catch(err=>{})
    }
   
    
    render(){
        return(
            <React.Fragment>
                {!this.state.loadingProduct?
                <h1>Loading....</h1>
                :
                <OneCard avatarSrc={this.state.product.imgUrl} 
                id={this.state.product._id}
                title={this.state.product.pName}
                price={this.state.product.price}
                />
                }
            </React.Fragment>
        )
    }
}



export default Product