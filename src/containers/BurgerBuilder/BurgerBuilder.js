import React, { Component } from "react";
import Burger from "./../../components/Burger/Burger";
import BuildControl from "./../../components/Burger/BuildControl/BuildControl";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Auxiliary from "./../../hoc/Auxiliary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 1.2,
  meat: 2,
  cheese: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    showOrderModal: false,
  };

  addIngredientHandler = (type) => {
    const oldQuantity = this.state.ingredients[type];
    const updatedQuantity = oldQuantity + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedQuantity;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldQuantity = this.state.ingredients[type];
    if (oldQuantity > 0) {
      const updatedQuantity = oldQuantity - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = updatedQuantity;

      const priceAddition = INGREDIENTS_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - priceAddition;

      this.setState({
        totalPrice: updatedPrice,
        ingredients: updatedIngredients,
      });

      this.updatePurchaseState(updatedIngredients);
    }
  };

  updatePurchaseState(updatedIngredients) {
    const sum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  cleanBurgerHandler = () => {
    this.setState({
      totalPrice: 4,
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
    });
  };

  purchaseHandler = () => {
    this.setState({ showOrderModal: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ showOrderModal: false });
  };

  render() {
    return (
      <Auxiliary>
        <Modal
          visible={this.state.showOrderModal}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
        </Modal>

        <Burger ingredients={this.state.ingredients}></Burger>

        <BuildControl
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          cleanBurger={this.cleanBurgerHandler}
          purchaseable={this.state.purchaseable}
          purchase={this.purchaseHandler}
          totalPrice={this.state.totalPrice}
        ></BuildControl>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
