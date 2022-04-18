import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AdminLayout from './pages/layout/AdminLayout'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import ProductManager from './pages/ProductManager';
import { useState } from 'react'
import { useEffect } from 'react'
import { add, list, remove, update } from './api/product'
import { ProductType } from './type/TypeProduct'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebsiteLayout from './pages/layout/WebsiteLayout'
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { signin, signup } from './api/auth'


const App = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  const onHanldeAdd = async (dataInput: ProductType) => {
   
    try {
      const { data } = await add(dataInput);
      setProducts([...products, dataInput]);
      navigate("/products")
   
      if(data){
        toast.success("Them thanh cong");
      }  
   } catch (error) {
     toast.error("them khong thanh cong");

     
   }

  }
  const onHanleUpdate = async(id: string, dataInput: ProductType) => {
    try {
      const { data } = await update(id, dataInput);
      setProducts(products.map((item) => item.id == data.id ? data : item))
      if(data)
      navigate('/products')
        toast.success("Sua thanh cong");
       
   } catch (error) {
     toast.error("loi khong update")
     
   }

  }
const hanleRemove = async(id: string) => {
  try {
    const {data} = await remove(id);
    setProducts((products.filter((item) => item.id !==id)))
    // setProducts(data)
    // navigate("/products")
    if(data) {

      toast.success("xoa thanh cong");
    }
    
  } catch (error) {
    toast.error("xoa khong thanh cong");
    
  }
}
const SignInpage = async (dataSignin: any) => {
  try {
    const { data } = await signin(dataSignin);
    // setProducts(products.map((item) => item.id == data.id ? data : item))
    if(data)
    navigate('/')
      toast.success("Dang nhap thanh cong");
     
 } catch (error) {
   toast.error("Dang nhap khong thanh cong");

   
 }
 
}
const SignUpPage  = async (datasignup: any) => {
  
  try {
    const {data} = await signup(datasignup)
    if(data){
      toast.success("ban dang ky thanh cong")
      navigate("signin")
    }
    
  } catch (error) {
    toast.error("sorry ban khong dang nhapd duoc roi");
    
    
  }
}




  return (
    <>
     <Routes>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="products">
          <Route index element={<ProductManager products={products} onRemove={hanleRemove} />} />
          <Route path="add" element={<ProductAdd onAdd={onHanldeAdd} />} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHanleUpdate}  />} />
        </Route>
      </Route>
      <Route path='/' element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
      

      
         
       
       
      </Route>
      <Route path="signin" element={<SignIn signinpage={SignInpage}  />} />
        <Route path="signup" element={<SignUp signuppage={SignUpPage} />} />
    
    </Routes>
  <ToastContainer />
    </>
   
  )
}

export default App
