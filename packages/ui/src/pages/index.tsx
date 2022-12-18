import React, { Component, lazy } from "react";
import styled from "styled-components";

interface WalletProps {
  className?: string;
}
interface WalletState {
  isEthereum: boolean;
  isMetamask: boolean;
}
class WalletState {}

class MetamaskWallet extends Component<
  WalletProps,
  WalletState
> {
  constructor(props: WalletProps) {
    super(props);
    let state = new WalletState();
    state.isEthereum = false;
    state.isMetamask = false;
    this.state = state;
  }

  setIsEthereum = (isEthereum: boolean) =>
    this.setState({ isEthereum });

  setIsMetamask = (isMetamask: boolean) =>
    this.setState({ isMetamask });

  componentDidMount(): void {
    if (window.ethereum) this.setIsEthereum(true);
    if (window.ethereum?.isMetaMask)
      this.setIsMetamask(true);
  }

  Field = (props: {
    className?: string;
    field: string;
    value: string;
  }) => (
    <div className={props.className}>
      <p>{props.field}</p>
      <p id="is-eth-res">{props.value}</p>
    </div>
  );
  StyledField = styled(this.Field)`
    display: inline-flex;
    #is-eth-res  {
      padding-left: 0.3rem;
      font-weight: bold;
    }
  `;

  Layout = ({ className }: WalletProps) => {
    const Field = this.StyledField;
    return (
      <div className={className} id="here">
        <p>metamask</p>
        <Field
          field="is Ethereum:"
          value={this.state.isEthereum.toString()}
        />
        <Field
          field="is Metamask:"
          value={this.state.isMetamask.toString()}
        />
      </div>
    );
  };
  StyledLayout = styled(this.Layout)`
    display: flex;
    flex-direction: column;
  `;

  render(): React.ReactNode {
    const Layout = this.StyledLayout;
    console.log(this.state);

    return <Layout {...this.props}></Layout>;
  }
}

export default function index() {
  return <MetamaskWallet />;
}
