import React, { Component, lazy } from "react";
import styled from "styled-components";

interface FieldProps {
  className?: string;
  field: string;
  value: boolean;
}
class FieldProps {}

interface WalletProps {
  className?: string;
}
interface WalletState {
  isEthereum: boolean;
  isMetamask: boolean;
  isTrust: boolean;
  isTrustWallet: boolean;
  isBraveWallet: boolean;
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
    state.isTrust = false;
    state.isTrustWallet = false;
    state.isBraveWallet = false;
    this.state = state;
  }

  setIsEthereum = (isEthereum: boolean) =>
    this.setState({ isEthereum });

  setIsMetamask = (isMetamask: boolean) =>
    this.setState({ isMetamask });

  setIsTrust = (isTrust: boolean) =>
    this.setState({ isTrust });

  setIsTrustWallet = (isTrustWallet: boolean) =>
    this.setState({ isTrustWallet });

  setIsBraveWallet = (isBraveWallet: boolean) =>
    this.setState({ isBraveWallet });

  componentDidMount(): void {
    console.log(window.ethereum);
    const eth = window.ethereum;
    if (eth) this.setIsEthereum(true);
    if (eth?.isMetaMask) this.setIsMetamask(true);
    // @ts-expect-error
    if (eth?.isTrust) this.setIsTrust(true);
    // @ts-expect-error
    if (eth?.isTrustWallet) this.setIsTrustWallet(true);
    // @ts-expect-error
    if (eth?.isBraveWallet) this.setIsBraveWallet(true);
  }

  Field = (props: FieldProps) => (
    <div className={props.className}>
      <p>{props.field}</p>
      <p id="is-eth-res">{props.value.toString()}</p>
    </div>
  );
  StyledField = styled(this.Field)`
    display: inline-flex;
    justify-content: space-between;
    #is-eth-res  {
      padding-left: 0.3rem;
      font-weight: bold;
      color: ${props => (props.value ? "green" : "red")};
    }
  `;

  Layout = ({ className }: WalletProps) => {
    const Field = this.StyledField;

    const isEthereum = new FieldProps();
    isEthereum.field = "is Ethereum:";
    isEthereum.value = this.state.isEthereum;

    const isMetamask = new FieldProps();
    isMetamask.field = "is Metamask:";
    isMetamask.value = this.state.isMetamask;

    const isTrust = new FieldProps();
    isTrust.field = "is Trust:";
    isTrust.value = this.state.isTrust;

    const isTrustWallet = new FieldProps();
    isTrustWallet.field = "is TrustWallet:";
    isTrustWallet.value = this.state.isTrustWallet;

    const isBraveWallet = new FieldProps();
    isBraveWallet.field = "is Brave new wallet:";
    isBraveWallet.value = this.state.isBraveWallet;

    return (
      <div className={className}>
        <div id="container">
          <p>Wallet test page</p>
          <Field {...isEthereum} />
          <Field {...isMetamask} />
          <Field {...isTrust} />
          <Field {...isTrustWallet} />
          <Field {...isBraveWallet} />
        </div>
      </div>
    );
  };
  StyledLayout = styled(this.Layout)`
    display: grid;
    place-items: center;
    background: rgb(7, 50, 56);
    background: linear-gradient(
      90deg,
      hsl(187, 77%, 12%) 35%,
      hsl(190, 77%, 28%) 100%
    );
    #container {
      background-color: #99d0f3;
      border-radius: 0.5rem;
      display: flex;
      width: max-content;
      flex-direction: column;
      padding: 2rem;
    }
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
