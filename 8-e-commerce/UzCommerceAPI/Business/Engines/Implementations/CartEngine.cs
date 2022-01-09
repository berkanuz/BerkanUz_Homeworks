using AutoMapper;
using System;
using System.Linq;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Cart;
using UzCommerce.Data.DAL.UnitOfWork;
using UzCommerce.Data.Entities;

namespace UzCommerce.Business.Engines.Implementations
{
    public class CartEngine : ICartEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IProductEngine _productEngine;
        public CartEngine(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IProductEngine productEngine)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _productEngine = productEngine;
        }

        public CartModel GetCart()
        {
            var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
            var cartItems = cartItemRepository.GetAll();
            var model = new CartModel();
            var totalAmount = cartItems.Sum(i => i.Product.Price * i.Quantity);
            model.CartItems = cartItems.Select(item => new CartItemModel()
            {
                Id = item.Id,
                ProductName = item.Product.Name,
                ProductPictureUrl = item.Product.PictureUrl,
                UnitPriceText = item.Product.Price + " TL",
                TotalPriceText = (item.Product.Price * item.Quantity) + " TL",
                Quantity = item.Quantity
            }).ToList();
            model.TotalText = totalAmount + " TL";
            return model;
        }

        public EngineResponseModel<string> AddToCart(AddToCartModel model)
        {
            var response = new EngineResponseModel<string>();
            try
            {
                var product = _productEngine.GetProductById(model.ProductId);
                if (product == null)
                {
                    response.Errors.Add("Product Not Found!");
                    return response;
                }
                var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
                var cartItem = GetCartItemByProductId(model.ProductId);

                if (cartItem == null)
                {
                    cartItem = new CartItemEntity()
                    {
                        ProductId = model.ProductId
                    };
                    cartItemRepository.Add(cartItem);
                }
                cartItem.Quantity++;
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation Successfull";
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to add a product to your basket");
            }
            return response;
        }

        public EngineResponseModel<string> DeleteFromCart(int cartId)
        {
            var response = new EngineResponseModel<string>();
            try
            {
                var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
                var cartItem = cartItemRepository.GetById(cartId);
                if (cartItem == null)
                {
                    response.Errors.Add("Data Not Found!");
                    return response;
                }
                cartItemRepository.Delete(cartItem);
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Message = "Operation Successfull";
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to delete a product from your basket");
            }
            return response;
        }

        private CartItemEntity GetCartItemByProductId(int productId)
        {
            var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
            var cartItem = cartItemRepository.Get(q => q.ProductId == productId).FirstOrDefault();
            return cartItem;
        }
    }
}
