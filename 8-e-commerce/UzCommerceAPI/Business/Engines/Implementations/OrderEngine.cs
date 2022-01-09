using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using UzCommerce.Business.Engines.Interfaces;
using UzCommerce.Business.Engines.Models;
using UzCommerce.Business.Engines.Models.Cart;
using UzCommerce.Business.Engines.Models.Order;
using UzCommerce.Data.DAL.UnitOfWork;
using UzCommerce.Data.Entities;

namespace UzCommerce.Business.Engines.Implementations
{
    public class OrderEngine : IOrderEngine
    {
        private readonly IUnitOfWork _unitOfWork;
        public OrderEngine(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public EngineResponseModel<OrderCompletedModel> CreateOrder(OrderCreateModel model)
        {
            var response = new EngineResponseModel<OrderCompletedModel>();
            try
            {
                var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
                if (!cartItemRepository.Get().Any())
                {
                    response.Errors.Add("Shopping cart is empty!");
                    return response;
                }
                var cartItems = cartItemRepository.GetAll();
                var order = CreateOrderEntity(cartItems, model);
                var orderRepository = _unitOfWork.GetRepository<OrderEntity>();
                orderRepository.Add(order);
                _unitOfWork.SaveChanges();
                response.IsSuccess = true;
                response.Data = new OrderCompletedModel()
                {
                    OrderId = order.Id
                };
                response.Message = "Order Created!";
                ClearCheckoutData();
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to create your order!");
            }
            return response;
        }

        public EngineResponseModel<OrderSummaryModel> GetOrderSummary(int orderId)
        {
            var response = new EngineResponseModel<OrderSummaryModel>();
            try
            {
                var model = new OrderSummaryModel();
                var orderRepository = _unitOfWork.GetRepository<OrderEntity>();
                var order = orderRepository.GetById(orderId);
                if (order == null)
                {
                    response.Errors.Add("Order Not Found");
                    return response;
                }
                response.Data = new OrderSummaryModel()
                {
                    OrderId = order.Id,
                    DeliveryDate = order.CreatedOnUtc.AddHours(3).AddDays(3).Date.ToShortDateString(),
                    CreatedDate = order.CreatedOnUtc.AddHours(3).Date.ToString("dd.MM.yyyy HH:mm"),
                    TotalText = order.OrderTotal + " TL",
                    PaymentMethod = order.PaymentMethod,
                    AddressModel = new AddressModel()
                    {
                        AddressDescription = order.Address.AddressDescription,
                        Name = order.Address.Name,
                        Phone = order.Address.Phone,
                        Surname = order.Address.Surname
                    },
                    OrderItems = order.OrderItems.Select(orderItem => new OrderItemModel()
                    { 
                        ProductName = orderItem.Product.Name,
                        Quantity = orderItem.Quantity,
                        UnitPriceText = orderItem.UnitPrice + " TL",
                        TotalPriceText = (orderItem.UnitPrice * orderItem.Quantity) + " TL"
                    }).ToList()
                };
                response.IsSuccess = true;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to get order summary!");
            }
            return response;
        }

        public EngineResponseModel<List<OrderSummaryModel>> GetAllOrders()
        {
            var response = new EngineResponseModel<List<OrderSummaryModel>>();
            try
            {
                var model = new OrderSummaryModel();
                var orderRepository = _unitOfWork.GetRepository<OrderEntity>();
                var orders = orderRepository.Get();
                response.Data = orders.Select( order =>  new OrderSummaryModel()
                {
                    OrderId = order.Id,
                    DeliveryDate = order.CreatedOnUtc.AddHours(3).AddDays(3).Date.ToShortDateString(),
                    CreatedDate = order.CreatedOnUtc.AddHours(3).Date.ToString("dd.MM.yyyy HH:mm"),
                    TotalText = order.OrderTotal + " TL",
                    PaymentMethod = order.PaymentMethod,
                    AddressModel = new AddressModel()
                    {
                        AddressDescription = order.Address.AddressDescription,
                        Name = order.Address.Name,
                        Phone = order.Address.Phone,
                        Surname = order.Address.Surname
                    }
                }).ToList();
                response.IsSuccess = true;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Errors.Add("An error ocurred when trying to get orders!");
            }
            return response;
        }

        private OrderEntity CreateOrderEntity(List<CartItemEntity> cartItems, OrderCreateModel model)
        {
            var order = new OrderEntity
            {
                Address = new AddressEntity()
                {
                    AddressDescription = model.Address.AddressDescription,
                    Name = model.Address.Name,
                    Surname = model.Address.Surname,
                    Phone = model.Address.Phone
                },
                PaymentMethod = model.SelectedPaymentMethod,
                CreatedOnUtc = DateTime.UtcNow,
                OrderTotal = cartItems.Sum(item => item.Product.Price * item.Quantity),
                OrderItems = cartItems.Select(item => new OrderItemEntity()
                {
                    UnitPrice = item.Product.Price,
                    ProductId = item.ProductId,
                    Quantity = item.Quantity
                }).ToList()
            };
            return order;
        }

        private void ClearCheckoutData()
        {
            var cartItemRepository = _unitOfWork.GetRepository<CartItemEntity>();
            var cartItems = cartItemRepository.GetAll();
            foreach (var item in cartItems)
            {
                cartItemRepository.Delete(item);
            }
            _unitOfWork.SaveChanges();
        }
    }
}
